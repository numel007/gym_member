crunch_monthly = 89
crunch_yearly = 1048.95
crunch_other_costs = 30 + 49.95 + 13.17
crunch_guest_pass = 0

total = 0

hr_monthly = 51.99
hr_yearly = 479.99
hr_guest_pass = 9.99

planet_monthly = 15
planey_yearly = 10
planet_other_costs_yearly = 59+39
planet_other_costs_monthly = 39 

while True:
    gym_name = input("Enter Gym: ")

    if gym_name == "crunch":

        monthly_membership = input("Monthly?: ")
        if monthly_membership == "yes":
            total = crunch_monthly * 12 + crunch_other_costs
            print(total)
        elif monthly_membership == "no":
            total = crunch_yearly
            print(total)
        break

    elif gym_name == "hr":

        monthly_membership = input("Monthly?: ")
        if monthly_membership == "yes":
            guest = input("Guest Pass?")
            if guest == "yes":
                total = hr_monthly * 12 + (hr_guest_pass * 12)
                print(total)
            elif guest == "no":
                total = hr_monthly * 12
                print(total)
            break

        elif monthly_membership == "no":

            guest = input("Guest Pass?: ")
            if guest == "yes":
                total = hr_yearly + (hr_guest_pass * 12)
                print(total)
            elif guest == "no":
                total = hr_yearly
                print(total)
            break

    elif gym_name == "planet":

        monthly_membership = input("Monthly?: ")
        if monthly_membership == "yes":
            total = planet_monthly * 12 + planet_other_costs_monthly
            print(total)
        elif monthly_membership == "no":
            total = planey_yearly * 12 + planet_other_costs_yearly
            print(total)
        break

    else:
        print("Not ready yet")
        continue
