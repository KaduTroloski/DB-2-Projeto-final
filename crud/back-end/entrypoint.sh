wait_time=45s
password=Password123!

echo importing data will start in $wait_time...
sleep $wait_time
echo executing script...

/opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P $password -i ./initScript.sql -C
