import twint
import pandas

c = twint.Config()
c.Search = "#ISMB2015 OR #ISMB15 OR @iscb"
c.Limit = 100000
# 2015: 7/10-7/14
# 2015-07-07: 4
# 2015-07-08: 9
# 2015-07-09: 64
# 2015-07-10: 223
# 2015-07-11: 248
# 2015-07-12: 236
# 2015-07-13: 117
# 2015-07-14: 77
# 2015-07-15: 28
# 2015-07-16: 2
# 2015-07-17: 0
c.Since = "2015-07-06 00:00:00"
c.Until = "2015-07-18 00:00:00"

c.Pandas = True
c.Resume = ""

twint.run.Search(c)
df = twint.storage.panda.Tweets_df

df.to_csv("twitter\Twint\ISMB\ISMB2015.csv", index=False)