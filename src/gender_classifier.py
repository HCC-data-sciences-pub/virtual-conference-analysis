from nltk.corpus import names
import nltk
import pandas as pd
import geo_recog


def gender_features(word):
    return {'last_letter': word[-1]}

labeled_names = ([(name, 'male') for name in names.words('male.txt')] + [(name, 'female') for name in names.words('female.txt')])
import random
random.shuffle(labeled_names)

featuresets = [(gender_features(n), gender) for (n, gender) in labeled_names]
train_set, test_set = featuresets[500:], featuresets[:500]
classifier = nltk.NaiveBayesClassifier.train(train_set)


with open("data\BCC2020\BCC_2020_Full_Attendee_Information.txt") as f:
    content = f.readlines()

content = [x.strip() for x in content]

gender_list = []

with open("data\BCC2020\BCC_2020_Full_Attendee_Information.txt") as f:
    country = f.readlines()

country = [x.strip() for x in country]

with open("data\BCC2020\BCC_2020_Full_Attendee_Information.txt") as f:
    affiliation = f.readlines()

affiliation = [x.strip() for x in affiliation]
female_prob_list = []
male_prob_list = []
for name in content:
    firstname = name.split(" ")[0]
    gender = classifier.classify(gender_features(firstname))
    female_prob_list.append(classifier.prob_classify(gender_features(firstname)).prob('female'))
    male_prob_list.append(classifier.prob_classify(gender_features(firstname)).prob('male'))
    gender_list.append(gender)

# print(len(affiliation))
# print(len(affiliation))

# # print(gender_list)
# geo_list = []
#
# for index in range(len(content)):
#     geo_list.append(country[index] + " " + affiliation[index])


df = pd.DataFrame({"name": content,"predict_gender": gender_list,"female_prob": female_prob_list, "male_prob": male_prob_list,"country": country,"affiliation": affiliation})
df.to_csv("data\BCC2020\BCC_2020_Full_Attendee_Information.csv", index=False)
