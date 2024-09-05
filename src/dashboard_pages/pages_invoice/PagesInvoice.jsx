import { BsThreeDotsVertical } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import flagIcon from "../../assets/flag.png";

// invoice data
const invoicesData = [
  {
    id: "EKG464SJFN17",
    invoice_subject: "Design Works",
    client: {
      name: "Wade Warren",
      vat_no: "87956621",
      flag_icon: "flagIcon",
    },
    date: "15 Dec, 2017",
    status: {
      label: "Pending",
      color: "#FF9500",
    },
    price: "$887.00",
    actions: {
      download: true,
      options: true,
    },
  },
  {
    id: "ADK756MPLD12",
    invoice_subject: "Website Development",
    client: {
      name: "Darlene Robertson",
      vat_no: "99215743",
      flag_icon: "flagIcon",
    },
    date: "10 Nov, 2018",
    status: {
      label: "Completed",
      color: "#28A745",
    },
    price: "$1,450.00",
    actions: {
      download: true,
      options: true,
    },
  },
  {
    id: "GHK745PLMK03",
    invoice_subject: "SEO Services",
    client: {
      name: "Cody Fisher",
      vat_no: "87415422",
      flag_icon: "flagIcon",
    },
    date: "23 Jan, 2020",
    status: {
      label: "Overdue",
      color: "#FF0000",
    },
    price: "$2,150.00",
    actions: {
      download: true,
      options: true,
    },
  },
];

function PagesInvoice() {
  return (
    // pages invoice
    <>
      <section className="bg-primary rounded-md mx-4 md:mx-6 lg:mx-8 p-4 md:p-5 lg:p-6">
        {/* pages title */}
        <span className="font-semibold text-dark mb-4 inline-block">
          Invoice
        </span>

        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="w-full min-w-full text-left table-auto text-xs">
                  <thead className="uppercase bg-[#F5F6F7] ">
                    <tr className="*:py-3">
                      <th scope="col"></th>
                      <th scope="col">No.</th>
                      <th scope="col">Invoice Subject</th>
                      <th scope="col">Client</th>
                      <th scope="col">Vat No.</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Price</th>
                      <th scope="col">Action</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoicesData?.map((invoice, ind) => {
                      const {
                        id,
                        invoice_subject,
                        client,
                        status,
                        date,
                        price,
                        actions,
                      } = invoice;
                      return (
                        <tr
                          key={ind}
                          className="*:py-[40px] border-b border-[#E5E7E8] *:whitespace-nowrap *:m-1"
                        >
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{id}</td>
                          <td className="text-dark font-semibold">
                            {invoice_subject}
                          </td>
                          <td>
                            <div className="flex items-center gap-1">
                              <img
                                className="w-[30px] h-[20px] object-cover"
                                src={flagIcon}
                                alt="flagIcon"
                              />
                              <span>{client.name}</span>
                            </div>
                          </td>
                          <td>{client.vat_no}</td>
                          <td>{date} </td>
                          <td>
                            <button
                              style={{ backgroundColor: status.color }}
                              className="size-2 rounded-full mr-1"
                            ></button>
                            {status.label}
                          </td>
                          <td>{price}</td>
                          <td>
                            {actions.download ? (
                              <div className="flex items-center justify-between">
                                <button className="bg-[#F0F6FF] rounded-full flex justify-center items-center gap-2 px-6 py-2 text-text-color font-semibold text-sm my-transition hover:bg-text-color hover:text-white">
                                  <FiDownload></FiDownload> Download
                                </button>
                                <button className="bg-[#F5F6F7] p-2 rounded-full size-10 flex justify-center items-center my-transition hover:bg-text-color hover:text-white">
                                  <BsThreeDotsVertical className="text-lg"></BsThreeDotsVertical>
                                </button>
                              </div>
                            ) : (
                              <button className="bg-[#F5F6F7] p-2 rounded-full size-10 flex justify-center items-center my-transition hover:bg-text-color hover:text-white">
                                <BsThreeDotsVertical className="text-lg"></BsThreeDotsVertical>
                              </button>
                            )}
                          </td>
                          <td></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* tfood */}
        <div className="pt-[40px] pb-[20px] flex justify-between items-center w-full">
          {/* showing result */}
          <p className="text-black text-sm">Showing 1 to 8 of 16 entries</p>

          {/* pagination */}
          <div className="flex justify-end gap-2">
            {/* previous */}
            <button className="bg-text-color/10 my-transition hover:bg-text-color hover:text-white rounded-full p-[10px] flex justify-center items-center text-text-color size-[40px]">
              <GoArrowLeft className="text-lg"> </GoArrowLeft>
            </button>

            {/* number */}
            <button className="bg-transparent my-transition hover:bg-[#F5F6F7] hover:text-dark rounded-full p-[10px] flex justify-center items-center text-[#626C70] size-[40px]">
              01
            </button>
            <button className="bg-text-color my-transition hover:bg-[#F5F6F7] hover:text-dark rounded-full p-[10px] flex justify-center items-center text-white size-[40px]">
              02
            </button>
            <button className="bg-transparent my-transition hover:bg-[#F5F6F7] hover:text-dark rounded-full p-[10px] flex justify-center items-center text-[#626C70] size-[40px]">
              03
            </button>
            <button className="bg-transparent my-transition hover:bg-[#F5F6F7] hover:text-dark rounded-full p-[10px] flex justify-center items-center text-[#626C70] size-[40px]">
              04
            </button>
            <button className="bg-transparent my-transition hover:bg-[#F5F6F7] hover:text-dark rounded-full p-[10px] flex justify-center items-center text-[#626C70] size-[40px]">
              05
            </button>

            {/* next */}
            <button className="bg-text-color/10 my-transition hover:bg-text-color hover:text-white rounded-full p-[10px] flex justify-center items-center text-text-color size-[40px]">
              <GoArrowRight className="text-lg"> </GoArrowRight>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PagesInvoice;
