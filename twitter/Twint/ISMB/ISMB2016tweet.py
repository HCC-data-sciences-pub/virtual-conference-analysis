import twint
import pandas

c = twint.Config()
c.Search = "#ISMB2016 OR #ISMB16 OR @iscb"
c.Limit = 100000
# 2016: 7/08-7/12
# 2016-07-05: 8
# 2016-07-06: 7
# 2016-07-07: 62
# 2016-07-08: 305
# 2016-07-09: 284
# 2016-07-10: 574
# 2016-07-11: 474
# 2016-07-12: 455
# 2016-07-13: 21
# 2016-07-14: 5
# 2016-07-15: 5
c.Since = "2016-07-04 00:00:00"
c.Until = "2016-07-17 00:00:00"

c.Pandas = True
c.Resume = ""

twint.run.Search(c)
df = twint.storage.panda.Tweets_df

df.to_csv("twitter\Twint\ISMB\ISMB2016.csv", index=False)