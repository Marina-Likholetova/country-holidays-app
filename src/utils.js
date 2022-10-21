export function getFilteredCountry (countries, input) {
    if (!input) {
        return countries;
    }

    return countries.filter((item) => item.name.toLowerCase().startsWith(input.toLowerCase()));
};
