export {};

const allowedParams = {
    q: true,
    page: true,
    pageSize: true,
};

const useQueryParams = () => {
    const queryParams = window.location.search.substring(1).split('&').reduce((agg, query) => {
        const [key, value] = query.split('=');

        if (allowedParams[key]) {
            agg[key] = value;
        }

        return agg;
    }, {});

    return queryParams as Record<keyof typeof allowedParams, string>;
}

const Container = () => {
    const queryParams = useQueryParams();
}