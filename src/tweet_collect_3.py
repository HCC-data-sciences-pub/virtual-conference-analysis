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

search_words = "#ASCO2020 OR #ASCO20 OR @ASCO"
date_since = "202005240000"
date_to = "202006021313"
# date_until = "2020-7-25"

# tweets = tw.Cursor(api.search,q=search_words,lang="en",since=date_since).items(1000)
tweets = tw.Cursor(api.search_full_archive,environment_name="covid",query=search_words,fromDate=date_since,toDate=date_to).items(2000)
# res = [tweet.text for tweet in tweets]

res = [[tweet.user.screen_name, tweet.user.location, tweet.text, tweet.created_at] for tweet in tweets]

tweet_text = pd.DataFrame(data=res,
                    columns=['user', "location", "content", "time"])

tweet_text.to_csv("twitter\ASCO2020\ASCO2020_3.csv", index=False)
