import os
from fpdf import FPDF

class ResumePDF(FPDF):
    def header(self):
        self.set_font('Helvetica', 'B', 18)
        self.set_text_color(25, 25, 25)
        self.cell(0, 8, 'ASTHA BISOI', ln=1)
        
        self.set_font('Helvetica', '', 11)
        self.set_text_color(129, 118, 168)
        self.cell(0, 6, 'AI & Data Science Engineer', ln=1)
        
        self.set_font('Helvetica', '', 9)
        self.set_text_color(111, 111, 106)
        self.cell(0, 5, 'Email: asbi1852@gmail.com  |  LinkedIn: linkedin.com/in/astha-bisoi  |  GitHub: github.com/asthabisoi28', ln=1)
        
        self.set_draw_color(217, 215, 208)
        self.set_line_width(0.5)
        self.line(10, 32, 200, 32)
        self.ln(6)

    def section_title(self, title):
        self.set_font('Helvetica', 'B', 11)
        self.set_text_color(25, 25, 25)
        self.cell(0, 6, title.upper(), ln=1)
        self.set_draw_color(217, 215, 208)
        self.set_line_width(0.3)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(3)

    def entry_header(self, left_text, right_text=''):
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(25, 25, 25)
        if right_text:
            self.cell(140, 5, left_text, ln=0)
            self.set_font('Helvetica', 'I', 9)
            self.set_text_color(111, 111, 106)
            self.cell(50, 5, right_text, ln=1, align='R')
        else:
            self.cell(0, 5, left_text, ln=1)

    def entry_subtitle(self, subtitle):
        self.set_font('Helvetica', 'I', 9)
        self.set_text_color(129, 118, 168)
        self.cell(0, 5, subtitle, ln=1)

    def bullet(self, text):
        self.set_font('Helvetica', '', 9)
        self.set_text_color(25, 25, 25)
        self.cell(6, 4.5, '-', ln=0)
        self.multi_cell(184, 4.5, text)
        self.ln(1)

pdf = ResumePDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

# Profile Summary
pdf.section_title('Profile Summary')
pdf.set_font('Helvetica', '', 9.5)
pdf.set_text_color(25, 25, 25)
pdf.multi_cell(0, 4.5, "AI & Data Science Engineer with a strong foundation in Machine Learning, Deep Learning, Computer Vision, and Generative AI. Skilled in building practical end-to-end applications from computer vision detection models to RAG pipelines and AI recruitment systems.")
pdf.ln(3)

# Experience
pdf.section_title('Experience')
pdf.entry_header('AI/ML Intern - BLP Industry AI', 'JUN 2026 - PRESENT')
pdf.bullet('Worked with real-world image datasets for annotation, preprocessing, and preparation of training data for computer vision models.')
pdf.bullet('Implemented and tested computer vision models using YOLO, CNNs, and OpenCV for detection and classification tasks.')
pdf.bullet('Gained hands-on experience in deep learning model training, evaluation, and optimization in a collaborative AI development environment.')
pdf.ln(3)

# Projects
pdf.section_title('Featured Projects')

pdf.entry_header('SmartHire - AI-Powered Virtual Interview & Assessment System')
pdf.entry_subtitle('Technologies: React.js, FastAPI, Python, TensorFlow.js, OpenAI API')
pdf.bullet('Integrated ATS resume screening, technical assessments, AI-driven virtual interviews, and real-time proctoring.')
pdf.bullet('Features face tracking, multiple-person detection, object detection, and tab-switch monitoring with automated feedback.')
pdf.ln(2)

pdf.entry_header('RAG Project - AI Chat with Document Search')
pdf.entry_subtitle('Technologies: Python, FastAPI, React.js, FAISS, Sentence Transformers, Gemini API')
pdf.bullet('End-to-end Retrieval-Augmented Generation system for PDF document QA with semantic search and source citations.')
pdf.ln(2)

pdf.entry_header('Hand Gesture & Face Recognition System')
pdf.entry_subtitle('Technologies: Python, OpenCV, MediaPipe, TensorFlow')
pdf.bullet('Real-time computer vision system using webcam input for hand gesture recognition and facial identification.')
pdf.ln(3)

# Education
pdf.section_title('Education')
pdf.entry_header('CMR Institute of Technology - Bengaluru, Karnataka', '2022 - 2026')
pdf.entry_subtitle('Bachelor of Engineering in Artificial Intelligence & Data Science')
pdf.ln(3)

# Certifications & Achievements
pdf.section_title('Certifications & Achievements')
pdf.bullet('Data Science Certification - Wipro')
pdf.bullet('Generative AI Studio Certification - Simplilearn')
pdf.bullet('Networking and Web Technology Certification - Infosys Springboard')
pdf.bullet('2nd Place - Trope Trivia (College Annual Fest 2024)')

output_path = os.path.join('public', 'resume.pdf')
pdf.output(output_path)
print(f"Resume generated at {output_path}")
