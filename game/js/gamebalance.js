class GameBalance {
    constructor() {
        
    }

    // Time calcs
    time_find_food(dist, ants) {
        return 1 + ((dist.val * .4) / Math.max(ants.val * .3, .5));
    } 

    time_get_food(dist, ants, energy) {
        return (dist * (1 / ants.val)) * (energy / (ants.val * 5));
    } 

    time_hatch_egg(eggs) {
        return 48 + eggs.val * 12;
    }

    time_build_room() {
        return 24 * 3;
    }

    // Energy calcs
    energy_find_food(ants) {
        return ants.val * 2;
    }

    energy_get_food(ants) {
        return ants.val * 2;
    }

    energy_hatch_egg(eggs) {
        return eggs.val * 4;
    }

    // Value calcs
    value_room_energy(rooms) {
        return 30 + (rooms - 1) * 10;
    }

    value_room_ants(rooms) {
        return 10 + (rooms - 1) * 10;
    }

    // Evaluations
    evaluateScouts(dist, ants) {
        let randdist = randnum(dist / 3) * randsig();
        let totaldist = dist + randdist;

        let places = PLACES.filter(p => p.d <= totaldist);
        let place = randweightsqrd(places, p => p.d);

        let lostants = 0;
        if (randnum() < .03)
        {
            lostants++;
        }

        return {
            dist: dist,
            ants: ants - lostants,
            lostants: lostants,
            source: place
        };
    }

    evaluateEggs(eggs) {
        return {
            ants: eggs,
            eggsHatched: eggs
        };
    }
}
