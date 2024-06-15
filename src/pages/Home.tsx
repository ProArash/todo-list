import {
    Box,
    TextField,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    AppBar,
    Typography,
} from "@mui/material";
import { FaCheck, FaCheckCircle, FaEraser, FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Home() {
    const dummyData = [
        { number: 1, title: "Hack the planet", status: true },
        { number: 2, title: "Hack the FBI", status: true },
        { number: 2, title: "Hack the 1230", status: false },
        { number: 2, title: "Hack the x123x", status: true },
        { number: 2, title: "Hack the 23x123x", status: false },
    ];
    return (
        <>
            <AppBar
                position="sticky"
                className="p-3 bg-red-400"
                variant="elevation"
            >
                <Typography variant="h6">Welcome Arash</Typography>
            </AppBar>
            <div className="flex justify-center">
                <Box
                    className="p-5 w-full m-2 sm:w-5/6 bg-white rounded-xl"
                    boxShadow={2}
                >
                    <h1 className="text-center font-bold text-2xl mb-3">
                        Todo list
                    </h1>
                    <div className="flex flex-col">
                        <div className="flex justify-center m-2">
                            <TextField
                                className="w-full sm:w-2/3"
                                placeholder="Title"
                            />
                        </div>

                        <div className="flex sm:flex-row flex-col items-center justify-center">
                            <Button
                                variant="contained"
                                className="w-1/2 sm:w-1/5"
                                sx={{
                                    margin: 1,
                                }}
                                startIcon={<FaPlus />}
                            >
                                Add
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                className="w-1/2 sm:w-1/5"
                                sx={{
                                    margin: 1,
                                }}
                                startIcon={<FaEraser />}
                            >
                                Remove
                            </Button>
                            <Button
                                color="success"
                                variant="contained"
                                className="w-1/2 sm:w-1/5"
                                sx={{
                                    margin: 1,
                                }}
                                startIcon={<FaCheck />}
                            >
                                Mark all as done
                            </Button>
                        </div>
                        <TableContainer className="bg-gray-100 rounded-xl mt-3">
                            <Table size="small">
                                <TableHead>
                                    <TableRow className="bg-blue-500">
                                        <TableCell sx={{ color: "white" }}>
                                            #
                                        </TableCell>
                                        <TableCell sx={{ color: "white" }}>
                                            Title
                                        </TableCell>
                                        <TableCell sx={{ color: "white" }}>
                                            Status
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {dummyData.map((row, index) => (
                                        <TableRow
                                            key={row.number}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-blue-100"
                                                    : "bg-blue-200"
                                            }
                                        >
                                            <TableCell>
                                                <Button variant="contained">
                                                    {row.number}
                                                </Button>
                                            </TableCell>
                                            <TableCell>{row.title}</TableCell>
                                            <TableCell>
                                                {row.status ? (
                                                    <FaCheckCircle className="text-green-500 text-xl" />
                                                ) : (
                                                    <FaX className="text-red-500 text-xl" />
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Box>
            </div>
        </>
    );
}
