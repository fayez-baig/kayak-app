import { getFilteredData } from "utils/helper";

describe("helper.tsx", () => {
  it("get all data", () => {
    const data = {
      data: [
        {
          website: "https://subus.cl/",
          alliance: "OW",
          phone: "",
          title: "Oneworld",
          logoUrl:
            "/rimg/provider-logos/airlines/v/SUBUS.png?crop=false&width=108&height=92&fallback=default1.png&_v=cf7f153576dad48e814135373e3baf34",
        },
      ],
    };
    const checkedValues = ["OW"];
    expect(getFilteredData(data, checkedValues)).toEqual(data.data);
  });
});
