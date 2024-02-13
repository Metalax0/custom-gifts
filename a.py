from datetime import datetime
from pytz import timezone
from django.utils import timezone as dj_timezone

user_date_string=name = input("Please enter time: ")
user_date = datetime.strptime(user_date_string, '%Y-%m-%d')
utc_timezone = timezone('UTC')

# Convert the datetime object to the desired timezone
user_date_utc = user_date.astimezone(utc_timezone)

print(type(user_date_utc))