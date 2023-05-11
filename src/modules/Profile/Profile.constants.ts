export const filterOptionList = [
  {
    title: "1W",
    value: "1w"
  },
  {
    title: "1M",
    value: "1m"
  },
  {
    title: "3M",
    value: "3m"
  },
  {
    title: "6M",
    value: "6m"
  },
  {
    title: "1Y",
    value: "1y"
  },
  {
    title: "ALL",
    value: "all"
  }
];

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  },

  scales: {
    y: {
      display: true,
      position: "right"
    }
  }
};

export const chartData: Record<string, any> = {
  "1w": {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    data: [12, 23, 45, 66, 122, 66, 88]
  },
  "1m": {
    labels: ["01/05", "06/05", "11/05", "16/05", "21/05", "26/05", "31/05"],
    data: [50, 89, 451, 66, 22, 76, 898]
  },
  "3m": {
    labels: ["01/03", "06/03", "11/04", "16/04", "21/04", "26/05", "31/05"],
    data: [40, 189, 251, 660, 242, 765, 98]
  },
  "6m": {
    labels: ["01/03", "06/03", "11/04", "16/05", "21/06", "26/07", "31/07"],
    data: [70, 289, 271, 360, 22, 565, 58]
  },
  "1y": {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ],
    data: [40, 189, 251, 660, 242, 765, 98, 251, 660, 242, 40, 189]
  },
  all: ""
};
