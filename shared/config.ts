export const ItemManagerConfig = {
    collectionName: 'SimpleItems',
    collectionNameForStorage: 'SimpleItemsStorage',
    // Determines how much weight a container can hold
    // This can be modified when calling functions
    weight: {
        enabled: false,
        maxWeight: 32,
    },
    // Determines how many item slots all containers have
    // This can be modified when calling functions
    slots: {
        enabled: true,
        maxCells: {
            width: 5,
            height: 20,
        },
    },
};
