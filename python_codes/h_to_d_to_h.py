def decimal_to_hex(decimal):# Decimal to Hexa
    hex_chars = "0123456789ABCDEF"
    if not decimal.isdigit():
        print("Invalid input")
        return
    decimal = int(decimal)
    hex_value = ""
    while decimal > 0:
        remainder = decimal % 16
        hex_value = hex_chars[remainder] + hex_value
        decimal = decimal // 16
    print(hex_value)


def hex_to_decimal(hex_value):# Hexa to Decimal
    if not all(char in "0123456789ABCDEF" for char in hex_value):
        print("Invalid input")
        return
    decimal_value = 0
    for char in hex_value:
        decimal_value = decimal_value * 16 + "0123456789ABCDEF".index(char)
    print(decimal_value)


d_to_h = input()#"170"
h_to_d = input()#"AA"
# Test cases
decimal_to_hex(d_to_h)
hex_to_decimal(h_to_d)