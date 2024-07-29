# Logging Library

**This repository contains the entire library for logging user events, errors, and any occurrences within a javascript instance.**

`dependencies`
```shell
    npm install better-sqlite3
```

## Basic SQLite3

`Basic Formatting`

```sql
CREATE SELECT INSERT DELETE WHERE
```
> Keywords (seen above) should be capitalized

```sql
CREATE TABLE IF NOT EXISTS tablename ... :x:
CREATE TABLE IF NOT EXISTS Tablename ... :heavy_check_mark:
```
> Anything that's variable should have a capitalized first letter


##### Why sqlite? Because I'm too lazy to write a sql server and also because its faster to write to than something like a CSV or JSON file.
***to be updated***