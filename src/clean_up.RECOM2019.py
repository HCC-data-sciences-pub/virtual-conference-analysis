import xlrd
import csv
import pandas as pd
from nltk.corpus import names
import nltk

def csv_from_excel():
    wb = xlrd.open_workbook('data\RECOM2019\RECOMB2019 attendees.xlsx')
    sh = wb.sheet_by_name('RECOMB only')
    your_csv_file = open('data\RECOM2019\RECOMB2019 attendees.csv', 'w')
    wr = csv.writer(your_csv_file)

    for rownum in range(sh.nrows):
        wr.writerow(sh.row_values(rownum))

    your_csv_file.close()

# runs the csv_from_excel function:
csv_from_excel()

def gender_features(word):
    return {'last_letter': word[-1]}

labeled_names = ([(name, 'male') for name in names.words('male.txt')] + [(name, 'female') for name in names.words('female.txt')])
import random
random.shuffle(labeled_names)

featuresets = [(gender_features(n), gender) for (n, gender) in labeled_names]
train_set, test_set = featuresets[500:], featuresets[:500]
classifier = nltk.NaiveBayesClassifier.train(train_set)
name_list = []
gender_list = []
country_list = []
institute_list = []
female_prob_list = []
male_prob_list = []

with open('data\RECOM2019\RECOMB2019 attendees.csv', newline='\n') as f:
    reader = csv.reader(f)
    data = list(reader)
    for row in data[1:]:
        # print(data)
        name_list.append(row[0] + " " + row[1])
        country_list.append(row[5])
        gender = classifier.classify(gender_features(row[0]))
        female_prob_list.append(classifier.prob_classify(gender_features(row[0])).prob('female'))
        male_prob_list.append(classifier.prob_classify(gender_features(row[0])).prob('male'))
        gender_list.append(gender)
        institute_list.append(row[3])

df = pd.DataFrame({"name": name_list,"predict_gender": gender_list,"female_prob": female_prob_list, "male_prob": male_prob_list,"country": country_list,"affiliation": institute_list})
df.to_csv("data\RECOM2019\RECOMB2019_participants.csv", index=False)
