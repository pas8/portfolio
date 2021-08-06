

export const useMapValues = (obj: object, mapper: (value?: any, key?: any) => any):any  =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: mapper(value, key)
    }),
    {}
  );
