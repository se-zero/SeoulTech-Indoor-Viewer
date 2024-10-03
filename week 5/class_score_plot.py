import matplotlib.pyplot as plt

def read_data(filename):
    data = []
    with open(filename, 'r') as f:
        for line in f.readlines():
            if not line.startswith('#'): # If 'line' is not a header
                data.append([int(word) for word in line.split(',')])
    return data

if __name__ == '__main__':
    # Load score data
    class_kr = read_data('week 5/data/class_score_kr.csv')
    class_en = read_data('week 5/data/class_score_en.csv')

    # TODO) Prepare midterm, final, and total scores
    midterm_kr, final_kr = zip(*class_kr)
    total_kr = [40/125*midterm + 60/100*final for (midterm, final) in class_kr]
    midterm_en, final_en = zip(*class_en)
    total_en = [40/125*midterm + 60/100*final for (midterm, final) in class_en]
   
    # TODO) Plot midterm/final scores as points
    plt.scatter(midterm_kr, final_kr, label='Korean', color='red', marker='o')
    plt.scatter(midterm_en, final_en, label='English', color='blue',marker='+')
    plt.xlabel('Midterm scores')
    plt.ylabel('Final scores')
    plt.xlim(0, 125)  
    plt.ylim(0, 100)
    plt.legend(loc='upper left')
    plt.grid(True)
    
    # TODO) Plot total scores as a histogram
    plt.figure()
    plt.hist(total_kr, bins=20, alpha=0.8, label='Korean', color='red',range=(0, 100))
    plt.hist(total_en, bins=20, alpha=0.3, label='English', color='blue',range=(0, 100))
    plt.xlabel('Total Score')
    plt.ylabel('The number of students')
    plt.xlim(0, 100)
    plt.legend(loc='upper left')

    
    plt.show()