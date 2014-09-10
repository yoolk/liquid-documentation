---
  layout: nav_basics
---

<h2 class="section-title">Date Filters</h2>
Reports the approximate distance in time between two Time, Date or DateTime objects or integers as seconds. Pass include_seconds: true if you want more detailed approximations when distance < 1 min, 29 secs. Distances are reported based on the following table:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#distance_of_time_in_words">distance_of_time_in_words</a>
      </li>
      <li>
        <a href="#time_ago_in_words">time_ago_in_words</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="distance_of_time_in_words">distance_of_time_in_words</h2>

Reports the approximate distance in time between two Time, Date or DateTime objects or integers as seconds. Pass include_seconds: true if you want more detailed approximations when distance < 1 min, 29 secs. Distances are reported based on the following table:

<div class="panel">
  <div class="panel-body">
    {% highlight ruby %}{% raw %}
      0 <-> 29 secs                                                             # => less than a minute
      30 secs <-> 1 min, 29 secs                                                # => 1 minute
      1 min, 30 secs <-> 44 mins, 29 secs                                       # => [2..44] minutes
      44 mins, 30 secs <-> 89 mins, 29 secs                                     # => about 1 hour
      89 mins, 30 secs <-> 23 hrs, 59 mins, 29 secs                             # => about [2..24] hours
      23 hrs, 59 mins, 30 secs <-> 41 hrs, 59 mins, 29 secs                     # => 1 day
      41 hrs, 59 mins, 30 secs  <-> 29 days, 23 hrs, 59 mins, 29 secs           # => [2..29] days
      29 days, 23 hrs, 59 mins, 30 secs <-> 44 days, 23 hrs, 59 mins, 29 secs   # => about 1 month
      44 days, 23 hrs, 59 mins, 30 secs <-> 59 days, 23 hrs, 59 mins, 29 secs   # => about 2 months
      59 days, 23 hrs, 59 mins, 30 secs <-> 1 yr minus 1 sec                    # => [2..12] months
      1 yr <-> 1 yr, 3 months                                                   # => about 1 year
      1 yr, 3 months <-> 1 yr, 9 months                                         # => over 1 year
      1 yr, 9 months <-> 2 yr minus 1 sec                                       # => almost 2 years
      2 yrs <-> max time or date                                                # => (same rules as 1 yr)
    {% endraw %}{% endhighlight %}
  </div>
</div>

With include_seconds: true and the difference < 1 minute 29 seconds:

<div class="panel">
  <div class="panel-body">
    {% highlight ruby %}{% raw %}
      0-4   secs      # => less than 5 seconds
      5-9   secs      # => less than 10 seconds
      10-19 secs      # => less than 20 seconds
      20-39 secs      # => half a minute
      40-59 secs      # => less than a minute
      60-89 secs      # => 1 minute

      from_time = Time.now
      distance_of_time_in_words(from_time, from_time + 50.minutes)                                # => about 1 hour
      distance_of_time_in_words(from_time, 50.minutes.from_now)                                   # => about 1 hour
      distance_of_time_in_words(from_time, from_time + 15.seconds)                                # => less than a minute
      distance_of_time_in_words(from_time, from_time + 15.seconds, include_seconds: true)         # => less than 20 seconds
      distance_of_time_in_words(from_time, 3.years.from_now)                                      # => about 3 years
      distance_of_time_in_words(from_time, from_time + 60.hours)                                  # => 3 days
      distance_of_time_in_words(from_time, from_time + 45.seconds, include_seconds: true)         # => less than a minute
      distance_of_time_in_words(from_time, from_time - 45.seconds, include_seconds: true)         # => less than a minute
      distance_of_time_in_words(from_time, 76.seconds.from_now)                                   # => 1 minute
      distance_of_time_in_words(from_time, from_time + 1.year + 3.days)                           # => about 1 year
      distance_of_time_in_words(from_time, from_time + 3.years + 6.months)                        # => over 3 years
      distance_of_time_in_words(from_time, from_time + 4.years + 9.days + 30.minutes + 5.seconds) # => about 4 years

      to_time = Time.now + 6.years + 19.days
      distance_of_time_in_words(from_time, to_time, include_seconds: true)                        # => about 6 years
      distance_of_time_in_words(to_time, from_time, include_seconds: true)                        # => about 6 years
      distance_of_time_in_words(Time.now, Time.now)
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="time_ago_in_words">time_ago_in_words</h2>

Like distance_of_time_in_words, but where to_time is fixed to Time.now.

<div class="panel">
  <div class="panel-body">
    {% highlight ruby %}{% raw %}
      time_ago_in_words(3.minutes.from_now)                 # => 3 minutes
      time_ago_in_words(3.minutes.ago)                      # => 3 minutes
      time_ago_in_words(Time.now - 15.hours)                # => about 15 hours
      time_ago_in_words(Time.now)                           # => less than a minute
      time_ago_in_words(Time.now, include_seconds: true) # => less than 5 seconds

      from_time = Time.now - 3.days - 14.minutes - 25.seconds
      time_ago_in_words(from_time)      # => 3 days

      from_time = (3.days + 14.minutes + 25.seconds).ago
      time_ago_in_words(from_time)      # => 3 days
    {% endraw %}{% endhighlight %}
  </div>
</div>

Note that you cannot pass a Numeric value to time_ago_in_words.