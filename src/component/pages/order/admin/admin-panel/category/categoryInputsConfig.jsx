import { MdTitle } from 'react-icons/md';

export const getCategoryInputTextsConfig = (category) => [
    {
        id: "0",
        name: "title",
        value: category.name,
        Icon: <MdTitle />,
        version: "minimalist",
        className: "title",
    }]