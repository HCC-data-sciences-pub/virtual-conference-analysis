import json

with open('data\world_universities_and_domains.json', encoding="utf-8") as f:
  data = json.load(f)



def geo_detect(insitute_name):
    # short =
    country = ""
    for school in data:
        if school["name"] in insitute_name:
            country = school["country"]
            return country
    for school in data:
        short = ""
        for char in school["name"]:
            if char.isupper():
                short = short + char
        if country == "" and insitute_name in short:
            country = school["country"]
    return country
