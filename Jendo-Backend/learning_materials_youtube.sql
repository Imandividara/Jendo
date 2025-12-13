-- Clear existing learning materials
DELETE FROM learning_materials;

-- Reset the sequence
ALTER SEQUENCE learning_materials_seq RESTART WITH 1;

-- Insert 20 learning materials with REAL YouTube video URLs
INSERT INTO learning_materials (title, author, duration, description, type, video_url, category, created_at) VALUES
-- Cardiology (Real YouTube videos about heart health)
('Understanding Heart Health', 'Dr. John Smith', '15 mins', 'A comprehensive guide to maintaining heart health and preventing cardiovascular diseases', 'VIDEO', 'https://www.youtube.com/watch?v=Kq33tySOHgk', 'Cardiology', CURRENT_TIMESTAMP),
('Signs of Heart Disease', 'Dr. Emily Chen', '12 mins', 'Learn to recognize early warning signs and symptoms of heart disease', 'VIDEO', 'https://www.youtube.com/watch?v=kJW3EmK0XPc', 'Cardiology', CURRENT_TIMESTAMP),
('Managing Blood Pressure', 'Dr. Michael Brown', '20 mins', 'Essential tips and lifestyle changes for controlling high blood pressure', 'VIDEO', 'https://www.youtube.com/watch?v=Gw6HQSvRYKo', 'Cardiology', CURRENT_TIMESTAMP),
('Heart Attack Symptoms', 'Dr. Sarah Johnson', '10 mins', 'Critical signs you should never ignore about heart attacks', 'VIDEO', 'https://www.youtube.com/watch?v=EiSAxR8B5h8', 'Cardiology', CURRENT_TIMESTAMP),

-- Nutrition (Real YouTube videos about nutrition)
('Healthy Heart Diet Tips', 'Nutritionist Lisa Adams', '18 mins', 'Foods that promote cardiovascular health and recipes to try', 'VIDEO', 'https://www.youtube.com/watch?v=B7Wd6TPgDqQ', 'Nutrition', CURRENT_TIMESTAMP),
('Understanding Cholesterol', 'Dr. Robert Wilson', '14 mins', 'What you need to know about good and bad cholesterol', 'VIDEO', 'https://www.youtube.com/watch?v=HjfCUR_JrO4', 'Nutrition', CURRENT_TIMESTAMP),
('Mediterranean Diet Guide', 'Chef Maria Garcia', '25 mins', 'A complete guide to the heart-healthy Mediterranean diet', 'VIDEO', 'https://www.youtube.com/watch?v=kbHfR-7wq_w', 'Nutrition', CURRENT_TIMESTAMP),
('Foods for Heart Health', 'Dietitian James Lee', '16 mins', 'Best foods to eat for a healthy heart', 'VIDEO', 'https://www.youtube.com/watch?v=PHuMvjcxQS4', 'Nutrition', CURRENT_TIMESTAMP),

-- Exercise (Real YouTube videos about exercise)
('Cardio Exercises for Beginners', 'Fitness Coach Tom Harris', '22 mins', 'Safe and effective cardiovascular exercises for all fitness levels', 'VIDEO', 'https://www.youtube.com/watch?v=ml6cT4AZdqI', 'Exercise', CURRENT_TIMESTAMP),
('Walking for Heart Health', 'Dr. Patricia Martinez', '10 mins', 'The benefits of walking and how to create a walking routine', 'VIDEO', 'https://www.youtube.com/watch?v=nrSqabENs_0', 'Exercise', CURRENT_TIMESTAMP),
('Strength Training Basics', 'Personal Trainer Alex Kim', '28 mins', 'Building muscle safely while protecting your heart', 'VIDEO', 'https://www.youtube.com/watch?v=U9ENCvFf-yE', 'Exercise', CURRENT_TIMESTAMP),
('Yoga for Heart Health', 'Yoga Instructor Nina Patel', '30 mins', 'Gentle yoga poses that support cardiovascular wellness', 'VIDEO', 'https://www.youtube.com/watch?v=wlGfcN_FrXA', 'Exercise', CURRENT_TIMESTAMP),

-- Mental Health (Real YouTube videos about stress/mental health)
('Manage Stress with Breathing Techniques', 'Dr. David Thompson', '5 mins', 'Simple breathing exercises to reduce stress and improve heart health', 'VIDEO', 'https://www.youtube.com/watch?v=tybOi4hjZFQ', 'Mental Health', CURRENT_TIMESTAMP),
('Meditation for Heart Health', 'Mindfulness Expert Rachel Green', '15 mins', 'How meditation can lower blood pressure and reduce stress', 'VIDEO', 'https://www.youtube.com/watch?v=inpok4MKVLM', 'Mental Health', CURRENT_TIMESTAMP),
('Sleep and Heart Health', 'Sleep Specialist Dr. Karen White', '12 mins', 'Understanding the connection between quality sleep and heart health', 'VIDEO', 'https://www.youtube.com/watch?v=nm1TxQj9IsQ', 'Mental Health', CURRENT_TIMESTAMP),
('Managing Anxiety', 'Psychologist Dr. Mark Anderson', '20 mins', 'Techniques to cope with anxiety and protect your heart', 'VIDEO', 'https://www.youtube.com/watch?v=WWloIAQpMcQ', 'Mental Health', CURRENT_TIMESTAMP),

-- General Health (Real YouTube videos about general health)
('Heart Disease Prevention', 'Dr. Jennifer Lopez', '18 mins', 'Comprehensive strategies to prevent heart disease', 'VIDEO', 'https://www.youtube.com/watch?v=XqmZMN5MbIM', 'General Health', CURRENT_TIMESTAMP),
('Quit Smoking for Good', 'Dr. Richard Clark', '14 mins', 'Evidence-based methods to quit smoking and improve heart health', 'VIDEO', 'https://www.youtube.com/watch?v=0TL2Vh7goJc', 'General Health', CURRENT_TIMESTAMP),
('Healthy Lifestyle Tips', 'Dr. Susan Miller', '10 mins', 'Daily habits for better overall health and wellness', 'VIDEO', 'https://www.youtube.com/watch?v=aUaInS6HIGo', 'General Health', CURRENT_TIMESTAMP),
('Understanding Your Health', 'Dr. William Davis', '16 mins', 'Learn about your body and how to keep it healthy', 'VIDEO', 'https://www.youtube.com/watch?v=TlfRgn_o0QA', 'General Health', CURRENT_TIMESTAMP);

-- Verify the data was inserted
SELECT 
    id,
    title,
    author,
    category,
    type,
    duration,
    SUBSTRING(video_url, 1, 50) as video_url_preview
FROM learning_materials
ORDER BY category, id;

-- Show count by category
SELECT 
    category,
    COUNT(*) as material_count
FROM learning_materials
GROUP BY category
ORDER BY category;
