import { BsThreeDotsVertical } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

function PagesInvoice() {
  return (
    // pages invoice
    <>
      <div className="bg-primary rounded-md mx-4 md:mx-6 lg:mx-8 p-4 md:p-5 lg:p-6">
        {/* pages title */}
        <span className="font-semibold text-dark mb-4 inline-block">
          Invoice
        </span>

        {/* invoice table */}
        <table className="w-full h-fit text-[#4A5154] font-medium text-xs">
          {/* thead */}
          <thead className="uppercase bg-[#F5F6F7] ">
            <tr className="*:py-3">
              <th></th>
              <th>No.</th>
              <th>Invoice Subject</th>
              <th>Client</th>
              <th>Vat No.</th>
              <th>Date</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>

          {/* tbody */}
          <tbody className="bg-primary w-full">
            <tr className="*:py-[40px] border-b border-[#E5E7E8]">
              <td>
                <input type="checkbox" />
              </td>
              <td>EKG464SJFN17</td>
              <td>Design Works</td>
              <td>
                <img src="" alt="" />
                Wade Warren
              </td>
              <td>87956621</td>
              <td>15 Dec, 2017 </td>
              <td>
                <button></button>
                Pending
              </td>
              <td>$887.00</td>
              <td>
                <button className="bg-[#F0F6FF] rounded-full flex justify-center items-center gap-2 px-6 py-2 text-text-color font-semibold text-sm my-transition hover:bg-text-color hover:text-white">
                  <FiDownload></FiDownload>Download
                </button>
              </td>
              <td>
                <button className="bg-[#F5F6F7] p-2 rounded-full size-10 flex justify-center items-center my-transition hover:bg-text-color hover:text-white">
                  <BsThreeDotsVertical className="text-lg"></BsThreeDotsVertical>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PagesInvoice;
