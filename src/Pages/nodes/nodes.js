import CompanyCard from "../../components/CompanyCard/CompanyCard";
import './nodes.scss'

const nodes = [
    {
        id: '1',
        data: { label: <CompanyCard name="Tata Steel" cumulativeSales="350 Cr" targetSales="700 Cr" categoryId="2912"></CompanyCard> },
        position: { x: window.innerWidth/2 + 220, y: 10 },
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },

    {
        id: '2',
        data: { label: <CompanyCard name="Factory A" cumulativeSales="160 Cr" targetSales="200 Cr" categoryId="1923"></CompanyCard> },
        position: { x: -window.innerWidth/2 + 120, y:300 },
        parentNode:'1',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
    {
        id: '3',
        data: { label: <CompanyCard name="Factory B" cumulativeSales="90 Cr" targetSales="200 Cr" categoryId="9021"></CompanyCard> },
        position: { x: 50, y: 300 },
        parentNode:'1',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
    {
        id: '4',
        data: { label: <CompanyCard name="Factory C" cumulativeSales="100 Cr" targetSales="200 Cr" categoryId="982"></CompanyCard> },
        position: { x: window.innerWidth/2 - 100, y: 300 },
        parentNode:'1',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
    {
        id: '5',
        data: { label: <CompanyCard name="Godown A" cumulativeSales="70 Cr" targetSales="100 Cr" categoryId="8912"></CompanyCard> },
        position: { x: -300, y: 300 },
        parentNode:'2',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
    {
        id: '6',
        data: { label: <CompanyCard name="Godown B" cumulativeSales="90 Cr" targetSales="100 Cr" categoryId="1923"></CompanyCard> },
        position: {  x: 90, y: 300 },
        parentNode:'2',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
    {
        id: '7',
        data: { label: <CompanyCard name="Godown C" cumulativeSales="20 Cr" targetSales="100 Cr" categoryId="1923"></CompanyCard> },
        position: { x: -240, y: 300 },
        parentNode:'3',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
    {
        id: '8',
        data: { label: <CompanyCard name="Godown D" cumulativeSales="70 Cr" targetSales="100 Cr" categoryId="1923"></CompanyCard> },
        position: {  x: 120, y: 300 },
        parentNode:'3',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
    {
        id: '9',
        data: { label: <CompanyCard name="Godown E" cumulativeSales="40 Cr" targetSales="100 Cr" categoryId="1923"></CompanyCard> },
        position: { x: -120, y: 300 },
        parentNode:'4',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
    {
        id: '10',
        data: { label: <CompanyCard name="Godown F" cumulativeSales="60 Cr" targetSales="100 Cr" categoryId="1923"></CompanyCard> },
        position: { x: 280, y: 300 },
        parentNode:'4',
        style: { width: "350px",
            height: "fit-content",
            background: "linear-gradient(#2e2eb1,#74363c,#000000)",
            borderRadius: "20px",
            margin: "0rem",
            padding: "10px",
            cursor:"pointer"
        }
    },
];

export default nodes;