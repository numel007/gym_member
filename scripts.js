const gym_input = document.querySelector('#gym_names')
gym_input.addEventListener('input', calculate)

const guest_input = document.querySelector('#guest_pass')
guest_input.addEventListener('input', calculate)

const membership_input = document.querySelector('#membership')
membership_input.addEventListener('input', calculate)

function calculate() {
    let gym_name = document.querySelector('#gym_names').value
    let guest_pass = document.querySelector('#guest_pass').value
    let membership = document.querySelector("#membership").value

    const crunch_monthly_cost = 89;
    const crunch_yearly = 1048.95
    const crunch_guest_pass = 0
    const crunch_other_costs = 30+49.95+13.17

    const hr_monthly_cost = 51.99
    const hr_yearly_cost = 479.99
    const hr_guest_pass = 9.99
    const hr_other_costs = 0

    const planet_monthly_cost = 15
    const planet_yearly_cost = 10 * 12
    const planet_other_costs_yearly = 59+39
    const planet_other_costs_monthly = 39
    const planet_guest_pass = 0

    var total = 0

    if (gym_name == "Crunch") {
        console.log("Crunch");
        if (membership == "monthly") {
            total = crunch_monthly_cost * 12 + crunch_other_costs + (crunch_guest_pass * 12);
            console.log(total);
        } else if (membership == "yearly") {
            total = crunch_yearly + (crunch_guest_pass * 12) + crunch_other_costs
            console.log(total)
        }

    } else if (gym_name== "24hr") {
        console.log("24 HR Fitness");
        if (membership == "monthly") {
            if (guest_pass == "yes") {
                total = hr_monthly_cost * 12 + hr_other_costs + (hr_guest_pass * 12);
                console.log(total);
            } else if (guest_pass == "no") {
                total = hr_monthly_cost * 12 + hr_other_costs;
                console.log(total);
            }
        } else if (membership == "yearly") {
            if (guest_pass == "yes") {
                total = hr_yearly_cost + (hr_guest_pass * 12);
                console.log(total);
            } else if (guest_pass == "no") {
                total = hr_yearly_cost;
            }
        }
    } else if (gym_name == "planet_fitness") {
        console.log("Planet Fitness");
        if (membership == "monthly") {
            total = planet_monthly_cost * 12 + planet_other_costs_monthly + (planet_guest_pass * 12);
            console.log(total);    
        } else if (membership == "yearly") {
            total = planet_yearly_cost + planet_other_costs_yearly + (planet_guest_pass * 12);
        }
    } else {
        console.log("Unhandled combination");
    }

    if (guest_pass == "yes") {
        console.log("Guess Pass Yes");
    } else if (guest_pass == "no") {
        console.log("Guest Pass No");
    }

    if (membership == "monthly") {
        console.log("Paying monthly");
    } else if (membership == "yearly") {
        console.log("Paying yearly")
    }

    const selected_gym = document.querySelector('#selected_gym')
    selected_gym.innerHTML = `Gym Selected: ${gym_name}`

    const selected_membership = document.querySelector('#selected_membership')
    if (gym_name == "Crunch") {
        if (membership == "monthly") {
            selected_membership.innerHTML = `Monthly dues per year: $${crunch_monthly_cost * 12}`;
        } else if (membership == "yearly") {
            selected_membership.innerHTML = `Monthly dues per year: $${crunch_yearly}`;
        }
    } else if (gym_name == "24hr") {
        if (membership == "monthly") {
            selected_membership.innerHTML = `Monthly dues per year: $${hr_monthly_cost * 12}`;
        } else if (membership == "yearly") {
            selected_membership.innerHTML = `Monthly dues per year: $${hr_yearly_cost}`;
        }
    } else if (gym_name == "planet_fitness") {
        if (membership == "monthly") {
            selected_membership.innerHTML = `Monthly dues per year: $${planet_monthly_cost * 12}`;
        } else if (membership == "yearly") {
            selected_membership.innerHTML = `Monthly dues per year: $${planet_yearly_cost}`;
        }
    } else {
        selected_membership.innerHTML = `Monthly dues per year: Gym not selected`;
    }

    const selected_guest = document.querySelector('#selected_guest')
    if (gym_name == "Crunch") {
        selected_guest.innerHTML = `Guest pass costs per year: $${crunch_guest_pass} - Crunch does not charge for guests.`;
    } else if (gym_name == "24hr") {
        if (guest_pass == "yes") {
            selected_guest.innerHTML = `Guest pass costs per year: $${hr_guest_pass * 12}`;
        } else if (guest_pass == "no") {
            selected_guest.innerHTML = `Guest pass costs per year: $${hr_guest_pass * 0}`;
        }
    } else if (gym_name == "planet_fitness") {
        selected_guest.innerHTML = `Guest pass costs per year: $${planet_guest_pass} - Planet Fitness does not charge for guests.`;
    }

    const selected_other_costs = document.querySelector('#selected_other_costs')
    if (gym_name == "Crunch") {
        selected_other_costs.innerHTML = `Maintenance costs per year: $${crunch_other_costs}`
    } else if (gym_name == "24hr") {
        selected_other_costs.innerHTML = `Maintenance costs per year: $${hr_other_costs}`
    } else if (gym_name == "planet_fitness") {
        if (membership == "monthly") {
            selected_other_costs.innerHTML = `Maintenance costs per year: $${planet_other_costs_monthly}`
        } else if (membership == "yearly") {
            selected_other_costs.innerHTML = `Maintenance costs per year: $${planet_other_costs_yearly}`
        }
    }

    const totals = document.querySelector('#totals')
    totals.innerHTML = `Total costs per year: $${total.toFixed(2)}`
}