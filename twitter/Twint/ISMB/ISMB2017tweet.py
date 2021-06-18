import twint
import pandas

c = twint.Config()
c.Search = "#ISMB2017 OR #ISMB17 OR @iscb"
c.Limit = 100000
# 2017: 7/21-7/25
# 2017-07-18: 4
# 2017-07-19: 13
# 2017-07-20: 29
# 2017-07-21: 94
# 2017-07-22: 89
# 2017-07-23: 182
# 2017-07-24: 114
# 2017-07-25: 75
# 2017-07-26: 14
# 2017-07-27: 6
# 2017-07-28: 0
c.Since = "2017-07-17 00:00:00"
c.Until = "2017-07-29 00:00:00"

c.Pandas = True
c.Resume = ""

twint.run.Search(c)
df = twint.storage.panda.Tweets_df

df.to_csv("twitter\Twint\ISMB\ISMB2017.csv", index=False)