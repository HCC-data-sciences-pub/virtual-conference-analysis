import pandas as pd
import re
import string
from nltk.corpus import names
import nltk
import geo_recog


with open("data\BioC2020\BioC2020_participants.txt", encoding="utf-8") as f:
    lines = f.readlines()

lines = [x.strip() for x in lines]
name_list = []
institute_list = []
position_list = []
conf_position_list = []
country_list = []

# print(lines[len(lines) - 1])
for line in lines:
    if len(line) == 1:
        lines.remove(line)
    elif line == "Search":
        lines.remove(line)
    elif line == "GO":
        lines.remove(line)

with open("data\BioC2020\BioC2020_participants_2.txt", 'w', encoding="utf-8") as f2:
    for line in lines:
        f2.write('%s\n' % line)

new_file = []
with open("data\BioC2020\BioC2020_participants_2.txt", encoding="utf-8") as f3:
    content = f3.read()
    content_list = content.split("\n\n\n")
    # print(content_list)
    for info in content_list:
        infolist = info.split("\n")
        if len(infolist) == 1:
            name_list.append(infolist[0])
            position_list.append("")
            institute_list.append("")
            conf_position_list.append("")
        elif len(infolist) == 2:
            # print(infolist)
            name_list.append(infolist[0])
            position_list.append("")
            institute_list.append("")
            conf_position_list.append(infolist[1])
        elif len(infolist) == 3:
            # print(infolist)
            name_list.append(infolist[0])
            position_list.append("")
            institute_list.append(infolist[1])
            conf_position_list.append(infolist[2])
        elif len(infolist) == 4:
            # print(infolist)
            name_list.append(infolist[0])
            position_list.append(infolist[2])
            institute_list.append(infolist[1])
            conf_position_list.append(infolist[3])
        else:
            name_list.append(infolist[0])
            position_list.append(infolist[2])
            institute_list.append(infolist[1])
            conf_position_list.append(infolist[3])

    # print(new_file)
    # with open("data\BioC2020\BioC2020_participants_3.txt", 'w', encoding="utf-8") as f4:
    #     for line in new_file:
    #         f4.write('%s\n' % line)
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

# 147 390
print(geo_count, len(name_list))

df = pd.DataFrame({"name": name_list,"predict_gender": gender_list, "female_prob": female_prob_list, "male_prob": male_prob_list, "country": country_list,"affiliation": institute_list,"position": position_list,"conf_position": conf_position_list})
df.to_csv("data\BioC2020\BioC2020_participants.csv", index=False)
