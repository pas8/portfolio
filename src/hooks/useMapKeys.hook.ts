export const useMapKeys = (obj: object, mapper: (value?: any, key?: any) => any):any  =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [mapper(value, key)]: value
    }),
    {}
  );
