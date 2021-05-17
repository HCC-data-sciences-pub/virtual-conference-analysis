import os
import tweepy as tw
import pandas as pd

consumer_key= ''
consumer_secret= ''
access_token= ''
access_token_secret= ''

auth = tw.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tw.API(auth, wait_on_rate_limit=True)

search_words = "#ISMB2020 OR #ISMB20 OR @iscb"
date_since = "202007030000"
date_to = "202007260000"
# date_until = "2020-7-25"

# tweets = tw.Cursor(api.search,q=search_words,lang="en",since=date_since).items(1000)
tweets = tw.Cursor(api.search_30_day,environment_name="covid30",query=search_words,fromDate=date_since,toDate=date_to).items(2000)
# res = [tweet.text for tweet in tweets]

res = [[tweet.user.screen_name, tweet.user.location, tweet.text, tweet.created_at] for tweet in tweets]

tweet_text = pd.DataFrame(data=res,
                    columns=['user', "location", "content", "time"])

tweet_text.to_csv("twitter\ISMB2020\ISMB2020_1.csv", index=False)
