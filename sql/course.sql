CREATE TABLE
  public.courses (
    "courseID" character varying(255) NOT NULL DEFAULT nextval('"courses_courseID_seq"'::regclass),
    "courseName" character varying(255) NULL,
    "courseDesc" character varying(255) NULL,
    "courseTeacherID" character varying(255) NOT NULL DEFAULT 0,
    "courseIcon" character varying(255) NULL,
    "stripeItemID" character varying(255) NULL
  );

ALTER TABLE
  public.courses
ADD
  CONSTRAINT courses_pkey PRIMARY KEY (courseID)