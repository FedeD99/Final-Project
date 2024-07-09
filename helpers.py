from cs50 import SQL
import sqlite3

db = SQL("sqlite:///app_info.db")

def lookup_1(region):
    query = f"SELECT Country FROM continents WHERE {region} = 1"
    print(query)
    rows = db.execute(query)
    return rows

def lookup_2(country):
    query = f"SELECT Dining FROM country_dining_exp WHERE {country} = 1"
    print(query)
    rows = db.execute(query)
    return rows

#def get_country_adjective(country):
#    query = f"SELECT Adjective FROM country_dining_exp WHERE Country = '{country}'"
#    print(query)  # Print the SQL query
#    rows = db.execute(query)
#    return rows

#def get_adjective(country):
#    query = "SELECT * FROM country_dining_exp"
#    rows = db.execute(query)
#    if rows:
#        print("Checking rows...")
#        for row in rows:
#            if country in row:
#                print(f"Checking country: {country} in row: {row}")
#                adjective_index = next((i for i, value in enumerate(row) if value == "Adjective"), None)
#                if adjective_index is not None:
#                    adjective = row[adjective_index]
#                    print(f"Adjective index found: {adjective_index}")
#                    return row[adjective_index]
#    print("Not working")
#    return None


def get_adjective(country):
    conn = sqlite3.connect('app_info.db')
    cursor = conn.cursor()

    query = "SELECT * FROM country_dining_exp"
    cursor.execute(query)
    rows = cursor.fetchall()  # Fetch all rows
    if rows:
        print("Checking rows...")
        column_names = [desc[1] for desc in cursor.execute("PRAGMA table_info(country_dining_exp)")]
        if country in column_names:
            print(f"Checking country: {country} in row: {column_names}")
            column_index = column_names.index(country)
            for row in rows:
                if row[0] == "Adjective":
                    result = row[column_index]
                    print(f"Adjective index found: {result}")
                    conn.close()
                    return result
    conn.close()
    print("Not working")
    return None
