import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../store/gameQueryStore";
import { useNavigate } from "react-router-dom";


const SearchInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQueryStore(s => s.setSearchText)
    const navigate = useNavigate()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (inputRef.current) {
          setSearchText(inputRef.current.value)
          navigate("/")
        }
    }


  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement color="gray.400" children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={inputRef}
          
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
