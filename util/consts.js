const RANGE_OPTIONS = [2, 5, 10, 12, 20, 50, 100, 500];

export const DEFAULT_GAME_OPTIONS = {
  modes: [
    {
      id: "add",
      name: "Addition",
      enabled: true,
      params: {
        range: {
          options: RANGE_OPTIONS,
          ranges: [
            [0, 6],
            [0, 6],
          ],
        },
      },
    },
    {
      id: "sub",
      name: "Subtraction",
      enabled: true,
      params: {
        range: {
          options: RANGE_OPTIONS,
          ranges: [
            [0, 6],
            [0, 6],
          ],
        },
        nonNegative: true,
      },
    },
    {
      id: "mult",
      name: "Multiplication",
      enabled: true,
      params: {
        range: {
          options: RANGE_OPTIONS,
          ranges: [
            [0, 6],
            [0, 6],
          ],
        },
      },
    },
    {
      id: "div",
      name: "Division",
      enabled: true,
      params: {
        range: {
          options: RANGE_OPTIONS,
          ranges: [
            [0, 6],
            [0, 6],
          ],
        },
      },
    },
  ],
};
