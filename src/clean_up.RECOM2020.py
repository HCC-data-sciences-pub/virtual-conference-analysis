import pandas as pd
import re
import string
from nltk.corpus import names
import nltk
import geo_recog

# with open("data\RECOM2020\RECOM2020_participants.txt", encoding="utf-8") as f:
#     with open("data\RECOM2020\RECOM2020_participants_1.txt", 'w', encoding="utf-8") as f1:
#         for line in f:
#         # print(line[1:])
#             newline = line[0].upper() + line[1:]
#             f1.write('%s' % newline)
name_list = []
institute_list = []
position_list = []
country_list = []

with open("data\RECOM2020\RECOM2020_participants.txt", encoding="utf-8") as f:
    content = f.read()
    content_list = content.split("\n\n")
    for info in content_list:
        infolist = info.split("\n")
        if len(infolist) == 1:
            name_list.append(infolist[0])
            position_list.append("")
            institute_list.append("")
        elif len(infolist) == 2:
            name_list.append(infolist[0])
            position_list.append("")
            institute_list.append(infolist[1])
        elif len(infolist) == 3:
            name_list.append(infolist[0])
            position_list.append(infolist[1])
            institute_list.append(infolist[2])
        else:
            name_list.append(infolist[0])
            position_list.append(infolist[1])
            institute_list.append(infolist[2])

def gender_features(word):
    return {'last_letter': word[-1]}


labeled_names = ([(name, 'male') for name in names.words('male.txt')] + [(name, 'female') for name in names.words('female.txt')])
import random
random.shuffle(labeled_names)

featuresets = [(gender_features(n), gender) for (n, gender) in labeled_names]
train_set, test_set = featuresets[500:], featuresets[:500]
classifier = nltk.NaiveBayesClassifier.train(train_set)

gender_list = []
female_prob_list = []
male_prob_list = []
for name in name_list:
    firstname = name.split(" ")[0]
    gender = classifier.classify(gender_features(firstname))
    female_prob_list.append(classifier.prob_classify(gender_features(firstname)).prob('female'))
    male_prob_list.append(classifier.prob_classify(gender_features(firstname)).prob('male'))
    gender_list.append(gender)

geo_count = 0

# for info in institute_list:
#     for name in name_list:
#         if name in info:
#             name_len = len(name)
#             print(info)
#             print(name)
#             info = info[name_len:]
#             print(info)

for school in institute_list:
    geo = geo_recog.geo_detect(school)
    if geo is not "":
        geo_count = geo_count + 1
    country_list.append(geo)

# 1746 3913
print(geo_count, len(name_list))

df = pd.DataFrame({"name": name_list,"predict_gender": gender_list,"female_prob": female_prob_list, "male_prob": male_prob_list,"country": country_list,"affiliation": institute_list,"position": position_list})
df.to_csv("data\RECOM2020\RECOM2020_participants.csv", index=False)
