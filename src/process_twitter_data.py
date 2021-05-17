import pandas as pd

# text = open("twitter\ASCO2020\ASCO2020.csv", 'r', encoding="utf-8")
# text = ''.join([i for i in text]).replace(",,,,,,,,,,,", "")
# x = open("twitter\ASCO2020\ASCO2020_x.csv","w", encoding="utf-8")
# x.writelines(text)
# x.close()
#
# text = open("twitter\ASCO2020\ASCO2020_x.csv", 'r', encoding="utf-8")
# text = ''.join([i for i in text]).replace(";", ",")
# x = open("twitter\ASCO2020\ASCO2020.csv","w", encoding="utf-8")
# x.writelines(text)
# x.close()

# print(text)


# with open("twitter\ASCO2020\ASCO2020.csv", 'w', encoding="utf-8") as f:
#     for line in f:
#         print(line)
data = pd.read_csv("twitter\BioC2016\BioC2016.csv", index_col=False, error_bad_lines=False)

# print(data)
# content = [x.strip() for x in content]
# print(content)




# tweets per day

date_dict = {}

for x in range(len(data.index)):
    current_date = data.iloc[x]["date"].split(" ")[0]
    if current_date in date_dict.keys():
        date_dict[current_date] += 1
    else:
        new_pair = {current_date: 1}
        date_dict.update(new_pair)

print(date_dict)



# tweets per day per person


date_person_dict = {}

for x in range(len(data.index)):
    current_date = data.iloc[x]["date"].split(" ")[0]
    current_user = data.iloc[x]["username"]
    if current_date in date_person_dict.keys():
        if current_user in date_person_dict[current_date].keys():
            date_person_dict[current_date][current_user] += 1
        else:
            new_user_pair = {current_user: 1}
            date_person_dict[current_date].update(new_user_pair)
    else:
        new_date_pair = {current_date: {}}
        date_person_dict.update(new_date_pair)

# print(date_person_dict)
