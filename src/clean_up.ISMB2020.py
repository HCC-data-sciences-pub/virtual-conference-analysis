import pandas as pd
import re
import string
from nltk.corpus import names
import nltk
import geo_recog

with open("data\ISMB2020\ISMB2020_participants.txt", encoding="utf-8") as f:
    with open("data\ISMB2020\ISMB2020_participants_1.txt", 'w', encoding="utf-8") as f1:
        for line in f:
        # print(line[1:])
            newline = line[0].upper() + line[1:]
            f1.write('%s' % newline)

with open("data\ISMB2020\ISMB2020_participants_1.txt", encoding="utf-8") as f:
    lines = f.readlines()


lines = [x.strip() for x in lines]

name_list = []
institute_list = []
country_list = []
flag = False
regex = re.compile('[-@_!#$%^&*()<>?/\|}{~:]')

# for line in lines:
#     if line[0] == "a":
#         # line[0] = line[0].capitalize()
#         print(line[0].upper())

for line in lines:
    # if line[0] == "a":
    #     line[0] = str(line[0].upper())
    #     print(line[0].upper())
    words_list = line.split(" ")
    # print(words_list)
    flag = False
    for word_index in range(len(words_list)):
        count = 0
        for char_index in range(len(words_list[word_index])):
            if flag is False:
                if words_list[word_index][char_index].isupper():
                    count += 1
                    if regex.search(words_list[word_index][char_index-1]):
                        count -= 1
                    # print(word[char_index])
                if count == 2:
                    name = ""
                    for name_part in words_list[:word_index]:
                        name = name + name_part + " "
                    name = name + words_list[word_index][:char_index]
                    name_list.append(name)
                    institute = words_list[word_index][char_index:]
                    for institute_part in words_list[word_index + 1:]:
                        institute = institute + " " + institute_part
                    # name_list.append(words_list[:char_index])
                    institute_list.append(institute)
                    flag = True
            # print(word)
    if flag == False:
        name_list.append(line)
        institute_list.append("")
# print(name_list)
count = 0
for name in name_list:
    if len(name) == 1:
        count += 1
        # print(name, count)
# print(institute_list)

# with open("data\ISMB2020\ISMB2020_participants_2.txt", 'w', encoding="utf-8") as f2:
#     for line in lines:
#         f2.write('%s\n' % line)

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

for school in institute_list:
    geo = geo_recog.geo_detect(school)
    if geo is not "":
        geo_count = geo_count + 1
    country_list.append(geo)

# 1293 2476
print(geo_count, len(name_list))

df = pd.DataFrame({"name": name_list,"predict_gender": gender_list, "female_prob": female_prob_list, "male_prob": male_prob_list,"country": country_list,"affiliation": institute_list})
df.to_csv("data\ISMB2020\ISMB2020_participants.csv", index=False)
