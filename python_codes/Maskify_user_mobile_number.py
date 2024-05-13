def maskify(number):
    masked = '#' * (len(number) - 3) + number[-3:]
    print(masked)#output "#######890" 

num=input()#input take 1234567890
# Test case
maskify(num)