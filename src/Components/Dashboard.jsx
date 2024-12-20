import { useState } from "react"

const Dashboard = () => {
    const [year, setYear] = useState("");
    const [classLevel, setClassLevel] = useState("");
    return (
        <>
            <div className="flex-1 p-6 bg-white mx-5 my-2 rounded-xl">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-2">
                        <select
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="rounded-md py-2 px-3 outline-none bg-slate-200 text-slate-600 font-bold notoSans"
                        >
                            <option value="2024">AY 2024-25</option>
                            <option value="2023">AY 2023-23</option>
                            <option value="2022">AY 2022-23</option>
                            <option value="2021">AY 2021-22</option>
                            <option value="2020">AY 2020-21</option>
                        </select>
                        <select
                            value={classLevel}
                            onChange={(e) => setClassLevel(e.target.value)}
                            className="rounded-md py-2 px-2 outline-none bg-slate-200 text-slate-600 font-bold notoSans"
                        >
                            <option value="12">CBSE 12</option>
                            <option value="11">CBSE 11</option>
                            <option value="10">CBSE 10</option>
                            <option value="9">CBSE 9</option>
                            <option value="8">CBSE 8</option>
                            <option value="7">CBSE 7</option>
                            <option value="6">CBSE 6</option>
                            <option value="5">CBSE 5</option>
                            <option value="4">CBSE 4</option>
                            <option value="3">CBSE 3</option>
                            <option value="2">CBSE 2</option>
                            <option value="1">CBSE 1</option>
                            <option value="UKG">CBSE UKG</option>
                            <option value="LKG">CBSE LKG</option>
                        </select>
                    </div>
                    <button className="rounded-md py-2 px-2 outline-none bg-slate-200 text-slate-600 font-bold notoSans">
                        <span className="w-5 h-5">+</span>&nbsp;Add New Student
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