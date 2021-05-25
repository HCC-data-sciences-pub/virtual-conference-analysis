import pandas as pd

from ethnicolr import pred_census_ln, pred_wiki_ln

# df = pd.read_csv("data\RECOM2019\RECOMB2019_participants.csv")
#
# last_name = [row.split(" ")[-1] for row in df["name"]]
# df["last_name"] = last_name
#
# pred_census_ln(df, 'last_name')
# df = df.drop(columns="last_name")
# df.to_csv("data\RECOM2019\RECOMB2019_participants.csv", index=False)
#
#
# df2 = pd.read_csv("data\ISMB2020\ISMB2020_participants.csv")
# last_name = [row.split(" ")[-1] for row in df2["name"]]
# df2["last_name"] = last_name
# pred_census_ln(df2, 'last_name')
# df2 = df2.drop(columns="last_name")
# df2.to_csv("data\ISMB2020\ISMB2020_participants.csv", index=False)


def detect_race(csv_name):
    black_list = []
    api_list = []
    white_list = []
    hisp_list = []
    df = pd.read_csv(csv_name)

    last_name = [row.split(" ")[-1] for row in df["name"]]
    df["last_name"] = last_name
    race1 = df["race"]
    # print(pred_census_ln(df, 'last_name'))
    df2 = pred_census_ln(df, "last_name")
    df["black_prob"] = df2["black"]
    df["white_prob"] = df2["white"]
    df["hispanic_prob"] = df2["hispanic"]
    df["api_prob"] = df2["api"]
    # df["Asian,GreaterEastAsian,EastAsian_prob"] = df2["Asian,GreaterEastAsian,EastAsian"]
    # df["Asian,GreaterEastAsian,Japanese_prob"] = df2["Asian,GreaterEastAsian,Japanese"]
    # df["Asian,IndianSubContinent_prob"] = df2["Asian,IndianSubContinent"]
    # df["GreaterAfrican,Africans_prob"] = df2["GreaterAfrican,Africans"]
    # df["GreaterAfrican,Muslim_prob"] = df2["GreaterAfrican,Muslim"]
    # df["GreaterEuropean,British_prob"] = df2["GreaterEuropean,British"]
    # df["GreaterEuropean,EastEuropean_prob"] = df2["GreaterEuropean,EastEuropean"]
    # df["GreaterEuropean,WestEuropean,French_prob"] = df2["GreaterEuropean,WestEuropean,French"]
    # df["GreaterEuropean,WestEuropean,Germanic_prob"] = df2["GreaterEuropean,WestEuropean,Germanic"]
    # df["GreaterEuropean,Jewish_prob"] = df2["GreaterEuropean,Jewish"]
    # df["GreaterEuropean,WestEuropean,Hispanic_prob"] = df2["GreaterEuropean,WestEuropean,Hispanic"]
    # df["GreaterEuropean,WestEuropean,Italian_prob"] = df2["GreaterEuropean,WestEuropean,Italian"]
    # df["GreaterEuropean,WestEuropean,Nordic_prob"] = df2["GreaterEuropean,WestEuropean,Nordic"]

    df = df.drop(columns="last_name")
    df["race_census"] = race1
    df.to_csv(csv_name, index=False)


detect_race("data\RECOM2019\RECOMB2019_participants.csv")
# detect_race("data\ISMB2020\ISMB2020_participants.csv")
# detect_race("data\BioC2020\BioC2020_participants.csv")
# detect_race("data\BCC2020\BCC_2020_Full_Speaker_Information.csv")
# detect_race("data\RECOM2020\RECOM2020_participants.csv")
# detect_race("data\BCC2020\BCC_2020_Full_Attendee_Information.csv")
