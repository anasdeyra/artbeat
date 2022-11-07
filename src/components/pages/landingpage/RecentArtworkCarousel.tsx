import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import NFTExploreCard, { NFT } from "../../nft/NFTExploreCard";

export default function RecentArtworkCarousel({ nfts }: { nfts: NFT[] }) {
  return (
    <Carousel
      styles={{
        control: { backgroundColor: "#C4811C", color: "white", border: "none" },
      }}
      controlsOffset={"xs"}
      slideSize="25%"
      slideGap="xl"
      breakpoints={[
        { maxWidth: "lg", slideSize: "33.33333333%" },
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
      align="start"
    >
      {nfts.map((nft, i) => (
        <Carousel.Slide key={i}>
          <NFTExploreCard {...nft} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
