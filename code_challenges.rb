# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

# i was able to get the 2 methods that do this but I couldnt figure out how to put them together i tried a few different ways but wasnt able to get them to work. 

def only_numbers array
    array.select { |element| element.is_a?(Integer) }.sort().filter{ |element| element.odd? }
end 




fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]


p only_numbers fullArr1
p only_numbers fullArr2




# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

def check_for (array, thing_to_find )
    array.select { |word| word.include? thing_to_find }
    end

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'water', 'soda water']

p check_for beverages_array , 'o'
p check_for beverages_array , 'a'




# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def cut_vowels string
    string.delete 'AEIOUaeiou'
end

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

p cut_vowels album1
p cut_vowels album2
p cut_vowels album3



# --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0



class Bike 
    def initialize 
        @model= 'Trek'
        @wheels= 2
        @current_speed= 0
    end
    def info 
        "The #{@model} mike has #{@wheels} wheels and is going #{@current_speed}"
    end
    def pedal_faster
        @current_speed = @current_speed + 10
    end
    def brake
        @current_speed = [0, @current_speed - 15].max

    end
end

bike1 = Bike.new

bike1.pedal_faster

p bike1.info

bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster
bike1.pedal_faster

p bike1.info

bike1.brake
bike1.brake
bike1.brake
bike1.brake


p bike1.info




