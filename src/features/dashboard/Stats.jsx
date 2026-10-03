import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // oneee
  const numBookings = bookings.length;

  // two
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // three
  const checkins = confirmedStays.length;

  //four
  const occupation = confirmedStays.reduce(
    (acc, curr) => acc + curr.numNights,
    0,
  );

  const totalNights = Number(numDays) * cabinCount;

  const occupancyRate = ((occupation / totalNights) * 100).toFixed(2);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={occupancyRate + "%"}
      />
    </>
  );
}

export default Stats;
