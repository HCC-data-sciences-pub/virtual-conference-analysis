import twint
import pandas

c = twint.Config()
c.Search = "#ISMB2020 OR #ISMB20 OR @iscb"
c.Limit = 100000
# 2020: 7/13-7/16
# 2020-07-10: 24 
# 2020-07-11: 16
# 2020-07-12: 33
# 2020-07-13: 262
# 2020-07-14: 221
# 2020-07-15: 258
# 2020-07-16: 198
# 2020-07-17: 24
# 2020-07-18: 16
# 2020-07-19: 0
c.Since = "2020-07-09 00:00:00"
c.Until = "2020-07-20 00:00:00"

c.Pandas = True
c.Resume = ""

twint.run.Search(c)
df = twint.storage.panda.Tweets_df

df.to_csv("twitter\Twint\ISMB\ISMB2020.csv", index=False)