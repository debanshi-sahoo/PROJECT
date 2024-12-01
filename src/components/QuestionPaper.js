import React, { useState } from "react";
import "./QuestionPaper.css";

const QuestionPaper = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");
    const [questionType, setQuestionType] = useState("Short Answer");

    const addQuestion = () => {
        if (newQuestion.trim()) {
            setQuestions([...questions, { text: newQuestion, type: questionType }]);
            setNewQuestion("");
        }
    };

    const handleDownload = () => {
        const questionPaper = questions
            .map((q, index) => `${index + 1}. [${q.type}] ${q.text}`) // Fixed string template
            .join("\n");
        const blob = new Blob([questionPaper], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "QuestionPaper.txt";
        a.click();
    };

    return (
        <div className="question-paper-container">
            <h2>Question Paper Generator</h2>
            <div className="form-group">
                <label htmlFor="question">Add a Question</label>
                <input
                    type="text"
                    id="question"
                    className="form-control"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="questionType">Select Question Type</label>
                <select
                    id="questionType"
                    className="form-control"
                    value={questionType}
                    onChange={(e) => setQuestionType(e.target.value)}
                >
                    <option>Short Answer</option>
                    <option>Multiple Choice</option>
                    <option>Essay</option>
                    <option>True/False</option>
                </select>
            </div>
            <button className="btn btn-primary" onClick={addQuestion}>
                Add Question
            </button>

            <div className="preview-section">
                <h3>Preview</h3>
                {questions.length === 0 ? (
                    <p>No questions added yet.</p>
                ) : (
                    <ol>
                        {questions.map((q, index) => (
                            <li key={index}>
                                [{q.type}] {q.text}
                            </li>
                        ))}
                    </ol>
                )}
            </div>

            <button
                className="btn btn-success"
                disabled={questions.length === 0}
                onClick={handleDownload}
            >
                Download Question Paper
            </button>
        </div>
    );
};

export default QuestionPaper;