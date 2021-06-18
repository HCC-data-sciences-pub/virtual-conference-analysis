import twint
import pandas

c = twint.Config()
c.Search = "#ISMB2018 OR #ISMB18 OR @iscb"
c.Limit = 100000
# 2018: 7/06-7/10
# 2018-07-03: 9
# 2018-07-04: 5
# 2018-07-05: 23
# 2018-07-06: 188
# 2018-07-07: 555
# 2018-07-08: 625
# 2018-07-09: 602
# 2018-07-10: 266
# 2018-07-11: 40
# 2018-07-12: 7
# 2018-07-13: 5
c.Since = "2018-07-02 00:00:00"
c.Until = "2018-07-15 00:00:00"

c.Pandas = True
c.Resume = ""

twint.run.Search(c)
df = twint.storage.panda.Tweets_df

df.to_csv("twitter\Twint\ISMB\ISMB2018.csv", index=False)