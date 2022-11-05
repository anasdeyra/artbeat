import { Group, Select, TextInput } from "@mantine/core";
import { BiChevronDown } from "react-icons/bi";
import { MdSearch } from "react-icons/md";

export default function TopFilters() {
  return (
    <Group>
      <CategorySelect />
      <SearchInput />
    </Group>
  );
}

function SearchInput() {
  return (
    <TextInput
      styles={{ input: { border: "1px solid #875A28" } }}
      radius={"md"}
      icon={<MdSearch color="#875A28" size={24} />}
      placeholder="Portrait Painting"
    />
  );
}

function CategorySelect() {
  return (
    <Select
      styles={{ input: { border: "1px solid #875A28" } }}
      radius={"md"}
      data={["Painting", "Sculpture", "Photograph"]}
      placeholder="Category"
      rightSection={<BiChevronDown color="#875A28" size={24} />}
    />
  );
}
