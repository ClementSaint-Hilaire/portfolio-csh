import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";


const icons = [
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.49997V5.99997M12 21.5V18M14.5 3.49997L12.2572 2.15432C12.0989 2.05932 11.9011 2.05932 11.7427 2.15432L9.5 3.49997M14.5 20.5L12.2572 21.8456C12.0989 21.9406 11.9011 21.9406 11.7427 21.8456L9.5 20.5M3.99993 16.4996L6.80032 15.0018M20 7.49997L17.1926 9.00178M3.38888 14.0849L3.34489 16.7C3.34178 16.8846 3.44069 17.0559 3.60213 17.1456L5.88888 18.415M18.1113 5.58489L20.3981 6.85434C20.5595 6.94397 20.6584 7.11528 20.6553 7.29991L20.6113 9.91501M20 16.5L17.1959 14.9999M3.99985 7.4999L6.8036 8.9999M18.1111 18.4151L20.3979 17.1456C20.5593 17.056 20.6582 16.8847 20.6551 16.7L20.6111 14.0849M3.38867 9.91506L3.34468 7.29996C3.34157 7.11533 3.44048 6.94401 3.60192 6.85439L5.88867 5.58493M12 12L14.5 10.5M12 12V15M12 12L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.10286 15.6005C5.85067 17.2728 7.62438 17.044 10.7579 15.2473C11.5074 14.8176 12.4406 14.8867 13.1489 15.3813C15.7509 17.1983 18.2559 17.68 20.0001 15.5C20.7369 14.3947 21.2021 13.0183 20.7963 10.7709C20.479 9.01378 18.9165 7.79988 17.1442 7.58293C13.5692 7.14533 10.5689 7.13912 7.01039 7.56425C5.15546 7.78586 3.55733 9.09808 3.17269 10.9262C2.77854 12.7995 2.94161 14.0316 3.91527 15.3845C3.97068 15.4615 4.03432 15.5349 4.10286 15.6005Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>      
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 12 4.50503 12.453 6 12C10.0253 10.7802 11.5 2 11.5 2L12 22C12 22 13.9747 13.2198 18 12C19.495 11.547 22 12 22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
  
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.99979 11.9997C1.9998 7 7.00023 1.99972 11.9999 2C16.9996 2.00028 22.0001 7 21 12M18.2322 19.5981L21.2322 14.402C21.7845 13.4454 21.4567 12.2222 20.5001 11.6699C19.5435 11.1176 18.3204 11.4454 17.7681 12.402L14.7681 17.5981C14.2158 18.5547 14.5435 19.7779 15.5001 20.3302C16.4567 20.8825 17.6799 20.5547 18.2322 19.5981ZM5.76783 19.5981L2.76783 14.402C2.21555 13.4454 2.5433 12.2222 3.49988 11.6699C4.45647 11.1176 5.67965 11.4454 6.23193 12.402L9.23193 17.5981C9.78422 18.5547 9.45647 19.7779 8.49988 20.3302C7.5433 20.8825 6.32012 20.5547 5.76783 19.5981Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 20V14M12 20V4M18 20V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
  
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8V5C3 3.89543 3.89543 3 5 3H8M16 3H19C20.1046 3 21 3.89543 21 5V8M21 16V19C21 20.1046 20.1046 21 19 21H16M8 21H5C3.89543 21 3 20.1046 3 19V16M15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5C10.8065 16.5 9.66194 16.0259 8.81802 15.182M16 8.5V10.5M8 8.5V10.5M12 8.5V12C12 12.5523 11.5523 13 11 13H10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>      
      ),
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.22395 9.67812L20.4672 2.75827C20.8703 2.60539 21.2649 3.00005 21.112 3.40309L14.1922 21.6464C14.0294 22.0755 13.4228 22.0769 13.258 21.6485L10.5115 14.5076C10.3083 13.9794 9.89093 13.562 9.36275 13.3588L2.22179 10.6123C1.79338 10.4475 1.79478 9.84091 2.22395 9.67812Z" stroke="currentColor" stroke-width="1.5"/>
        </svg>      
      ),   
    },
    {
      svg: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 4.5H13M6 4.5V19.5C6 20.8807 7.11929 22 8.5 22H15.5C16.8807 22 18 20.8807 18 19.5V4.5C18 3.11929 16.8807 2 15.5 2H8.5C7.11929 2 6 3.11929 6 4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      ),
    },
  ];


const firstRow = icons.slice(0, icons.length / 2);
const secondRow = icons.slice(icons.length / 2);
const thirdRow = icons.slice(icons.length / 2);
const fourthRow = icons.slice(2, icons.length / 2);


export function Marquee4Vertical() {
  return (
    <div className="relative flex h-[250px] w-full flex-row items-center justify-center overflow-hidden rounded-xl bg-blanc dark:bg-noir">
      <Marquee vertical className="[--duration:20s]">
        {firstRow.map((icon, index) => (
          <div
            key={index}
            className={cn(
              "flex h-40 w-36 items-center justify-center"
            )}
          >
            {icon.svg}
          </div>
        ))}
      </Marquee>
      <Marquee reverse vertical className="[--duration:20s]">
        {secondRow.map((icon, index) => (
          <div
            key={index}
            className={cn(
              "flex h-40 w-36 items-center justify-center"
            )}
          >
            {icon.svg}
          </div>
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:20s]">
        {thirdRow.map((icon, index) => (
          <div
            key={index}
            className={cn(
              "flex h-40 w-36 items-center justify-center"
            )}
          >
            {icon.svg}
          </div>
        ))}
      </Marquee>
      <Marquee reverse vertical className="[--duration:20s]">
        {fourthRow.map((icon, index) => (
          <div
            key={index}
            className={cn(
              "flex h-40 w-36 items-center justify-center"
            )}
          >
            {icon.svg}
          </div>
        ))}
      </Marquee>
    </div>
  );
}