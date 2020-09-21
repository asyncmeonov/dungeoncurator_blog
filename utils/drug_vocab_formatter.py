import csv

BASE_PATH = "C:\\Users\\Angel\\Documents\\TestProjects\\nicodaw.github.io\\_data\\" #! Hardcoded path, change

def main():
    # Remove names that:
    ## contain more than two words
    ## contain more numbers
    
    # if the drug has a one-word name, write it directly
    # if the drug has a two-word name, concat with a dash '-'
    with open(BASE_PATH+"drug_vocab_raw.csv") as f:
        csv_reader = csv.reader(f, delimiter = ',')
        count = 0
        for row in csv_reader:
            if count == 0:
                count += 1
            else: 
                name = row[0].split()
                if len(name) > 2 or hasNumbers(str(name)):
                    print("Skipping " + str(name))
                elif len(name) == 1:
                    write_row(name[0])
                elif len(name) == 2:
                    write_row(name[0]+'-'+name[1])
                
def write_row(row):
    with open(BASE_PATH+"drug_vocab.csv", mode='a', newline='') as f:
        csv_writer = csv.writer(f, delimiter = ',',quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([row])

def hasNumbers(inputString):
    return any(char.isdigit() for char in inputString)

if __name__ == "__main__":
    main()