import twint
import pandas

c = twint.Config()
c.Search = "#ISMB2019 OR #ISMB19 OR @iscb"
c.Limit = 100000
# 2019: 7/21-7/25
# 2019-07-18: 10 
# 2019-07-19: 14
# 2019-07-20: 10
# 2019-07-21: 45
# 2019-07-22: 96
# 2019-07-23: 89
# 2019-07-24: 65
# 2019-07-25: 48
# 2019-07-26: 4
# 2019-07-27: 3
# 2019-07-28: 0
c.Since = "2019-07-17 00:00:00"
c.Until = "2019-07-29 00:00:00"

c.Pandas = True
c.Resume = ""

twint.run.Search(c)
df = twint.storage.panda.Tweets_df

df.to_csv("twitter\Twint\ISMB\ISMB2019.csv", index=False)