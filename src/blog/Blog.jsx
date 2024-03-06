import Container from "@/components/ui/Container";
import search from "@/images/logo/search.svg";
import Image from "next/image";

const Blog = () => {
    return (
        <Container className="pt-[84px] pb-10 flex items-center justify-between mx-[75px]">
            <div className="flex items-center gap-[15px]">
                <div className="text-indigo text-[40px] font-bold leading-[50px] pr-10">Blog</div>
                <div className="h-10 px-5 py-[7px] bg-gray-500 bg-opacity-10 rounded-[40px] justify-start items-start gap-2.5 inline-flex">
                    <div className="text-indigo-950 text-base font-normal leading-relaxed">Sports</div>
                </div>
                <div className="h-10 px-5 py-[7px] bg-gray-500 bg-opacity-10 rounded-[40px] justify-start items-start gap-2.5 inline-flex">
                    <div className="text-indigo-950 text-base font-normal leading-relaxed">Sports Car</div>
                </div>
                <div className="h-10 px-5 py-[7px] bg-gray-500 bg-opacity-10 rounded-[40px] justify-start items-start gap-2.5 inline-flex">
                    <div className="text-indigo-950 text-base font-normal leading-relaxed">Bike</div>
                </div>
            </div>
            <div className="w-[300px] h-10 px-5 py-[7px] bg-white bg-opacity-50 rounded-[40px] border border-white backdrop-blur-2xl justify-start items-center gap-2.5 inline-flex">
                <Image src={search} className="w-5 h-5 relative" alt="search" />
                <div className="text-black text-opacity-50 text-base font-normal font-['DM Sans'] leading-relaxed">Search</div>
            </div>
        </Container>
    );
};

export default Blog;
