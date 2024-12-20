import { useState } from "react"

const Dashboard = () => {
    const [year, setYear] = useState("");
    const [classLevel, setClassLevel] = useState("");
    return (
        <>
            <div className="flex-1 p-6">
                <div className="flex justify-between mb-4">
                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="border rounded-md p-2"
                    >
                        <option value="">Select Annual Year</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                    <select
                        value={classLevel}
                        onChange={(e) => setClassLevel(e.target.value)}
                        className="border rounded-md p-2"
                    >
                        <option value="">Select Class</option>
                        <option value="UKG">UKG</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                        <option value="3">Class 3</option>
                        <option value="4">Class 4</option>
                        <option value="5">Class 5</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                    </select>
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2">
                        Add New Student
                    </button>
                </div>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Student Name</th>
                            <th className="border px-4 py-2">Cohort</th>
                            <th className="border px-4 py-2">Course</th>
                            <th className="border px-4 py-2">Date Joined</th>
                            <th className="border px-4 py-2">Last Login</th>
                            <th className="border px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Alice Smith</td>
                            <td className="border px-4 py-2">2023</td>
                            <td className="border px-4 py-2">Science, Maths</td>
                            <td className="border px-4 py-2">01/01/2023</td>
                            <td className="border px-4 py-2">01/10/2023</td>
                            <td className="border px-4 py-2">Active</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Bob Johnson</td>
                            <td className="border px-4 py-2">2023</td>
                            <td className="border px-4 py-2">Science, Maths</td>
                            <td className="border px-4 py-2">01/02/2023</td>
                            <td className="border px-4 py-2">01/09/2023</td>
                            <td className="border px-4 py-2">Inactive</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard